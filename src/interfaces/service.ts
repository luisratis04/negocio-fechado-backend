export interface IService {
  title: string;
  description: string;
  legal_person_id: string;
  value: number;
}

export interface IServiceComplete extends IService {
  hire_number: number;
  assess_value: number;
}

export interface IServiceWithId extends IService {
  id: number;
}
