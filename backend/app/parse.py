#!/usr/bin/env python3

import sys
import re
import json

def parse_minerva_schedule(lines):
    """
    Parses Minerva schedule text and returns a dictionary with
    "courses": [ {title, courseCode, section, schedule:{time, days, location, dateRange}} ]
    """
    courses = []

    # Regex to match the line with Course Title, Code, and Section, e.g.:
    # "Introduction to Software Systems. - COMP 206 - 001"
    course_line_pattern = re.compile(
        r'^(?P<title>.*?)\s*-\s*(?P<courseCode>[A-Z]{4}\s*\d{3,4})\s*-\s*(?P<section>\d{3})$'
    )

    # We'll use a simple state machine approach:
    # 1. When we see a course line, we capture title, code, section
    # 2. Then we skip forward until we see "Scheduled Meeting Times"
    # 3. The next line after "Scheduled Meeting Times" has: Time Days Where DateRange ...
    #    We'll parse only the fields we need.

    current_course = None
    waiting_for_schedule = False

    for line in lines:
        line = line.strip()

        # 1) Check if line matches the course pattern
        match_course = course_line_pattern.match(line)
        if match_course:
            # If we were working on a course, push it to list (if schedule was found or not).
            if current_course is not None:
                courses.append(current_course)
            # Start a new course dict
            current_course = {
                "title": match_course.group("title").strip(),
                "courseCode": match_course.group("courseCode").strip(),
                "section": match_course.group("section").strip(),
                "schedule": {
                    "time": "",
                    "days": "",
                    "location": "",
                    "dateRange": ""
                }
            }
            waiting_for_schedule = False
            continue

        # 2) If line starts with "Scheduled Meeting Times" we set a flag
        if re.match(r'^Time\s+Days\s+Where\s+Date\s+Range\s+Schedule\sType\s+Instructor(s?)$', line.strip()):
            waiting_for_schedule = True
            continue

        # 3) If we just saw "Scheduled Meeting Times", the next line should have schedule info
        if waiting_for_schedule and current_course:
            # Example schedule line might look like:
            # "2:35 pm - 3:55 pm  MW  Leacock Building 132  Jan 06, 2025 - Apr 11, 2025  Lecture Joseph P Vybihal"
            # We only want: time, days, location, dateRange
            # We'll try to parse it by splitting or using a regex approach.

            # Let's do a quick split approach. We'll attempt to parse:
            # time = "2:35 pm - 3:55 pm"
            # days = "MW"
            # location = "Leacock Building 132"
            # dateRange = "Jan 06, 2025 - Apr 11, 2025"
            # The rest are "Schedule Type" and "Instructors", which we ignore.

            # NOTE: The columns are variable spaced. We'll do a rough approach:
            # Instead of line.split('\t'), you might rely on multiple spaces:
            parts = line.strip().split('\t')
            # If the input doesn't have tabs, we might need to split on multiple spaces
            if len(parts) < 5:
                # Fallback: split on 2+ spaces
                parts = re.split(r'\s{2,}', line)

            # After splitting, we expect:
            # parts[0] = "2:35 pm - 3:55 pm"
            # parts[1] = "MW"
            # parts[2] = "Leacock Building 132"
            # parts[3] = "Jan 06, 2025 - Apr 11, 2025"
            # parts[4] = "Lecture" (ignored)
            # parts[5] = "Instructors..." (ignored)

            # We'll do a safety check to ensure we have at least 4 parts
            if len(parts) >= 4:
                current_course["schedule"]["time"] = parts[0].strip()
                current_course["schedule"]["days"] = parts[1].strip()
                current_course["schedule"]["location"] = parts[2].strip()
                current_course["schedule"]["dateRange"] = parts[3].strip()

            waiting_for_schedule = False  # done reading schedule line
            continue

    # End of lines: If the last course was still open, add it
    if current_course is not None:
        courses.append(current_course)

    return {"courses": courses}


def main():
    # Read all lines from stdin
    text = """"""

    lines = text.split("\n")

    # Parse the schedule
    result = parse_minerva_schedule(lines)

    # Print JSON
    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()
