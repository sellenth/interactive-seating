export type JurorType = {
  name: string,
  age: number
}

export interface NewJurorType {
  first_name: string;
  middle_initial?: string;
  last_name?: string;
  birth_month?: string;
  birth_day?: string;
  city?: string;
  years_in_florida?: string;
  years_in_county?: string;
  marital_status?: string;
  highest_education?: string;
  occupation?: string;
  employer?: string;
  last_occupation?: string;
  last_employer?: string;
  spouse_name?: string;
  spouse_occupation?: string;
  spouse_last_occupation?: string;
  spouse_last_employer?: string;
  previous_juror?: boolean;
  previous_juror_civil?: boolean;
  previous_juror_criminal?: boolean;
  children?: string;
  law_enforcement_officer?: boolean;
  law_enforcement_officer_family?: boolean;
  law_enforcement_officer_close_friend?: boolean;
  witness_crime?: boolean;
  witness_crime_family?: boolean;
  witness_crime_close_friend?: boolean;
  victim_of_crime?: boolean;
  victim_of_crime_family?: boolean;
  victim_of_crime_close_friend?: boolean;
  arrested_or_accused_of_crime?: boolean;
  arrested_or_accused_of_crime_family?: boolean;
  arrested_or_accused_of_crime_close_friend?: boolean;
  made_clame_for_personal_injuries?: boolean;
  made_clame_for_personal_injuries_family?: boolean;
  made_clame_for_personal_injuries_close_friend?: boolean;
  subject_of_claim_for_personal_injuries?: boolean;
  subject_of_claim_for_personal_injuries_family?: boolean;
  subject_of_claim_for_personal_injuries_close_friend?: boolean;
  been_involved_in_other_lawsuit?: boolean;
  been_involved_in_other_lawsuit_family?: boolean;
  been_involved_in_other_lawsuit_close_friend?: boolean;
  previous_involved_lawsuit?: string;
  date_added?: string;
  case?: number;
  notes?: string;
  risk_score_ai?: string;
  risk_score_user?: string;
}