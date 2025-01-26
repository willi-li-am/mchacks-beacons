export interface AuthState {
  email: string;
  username: string;
  user_id: string;
  schedule?: Schedule;
}

export interface UserState {
  username: string;
  availability: Availability;
  schedule?: Schedule;
}

export interface Availability {
  isAvailable: boolean;
  availableTime: string; // either available until, or will be available at this time
}

export interface Schedule {
  courses: Course[];
}

export interface Course {
  title: string;
  courseCode: string;
  section: string;
  schedule: {
    time: string;
    days: string;
    location: string;
  };
}

export interface FriendState {
  friends: UserState[];
}