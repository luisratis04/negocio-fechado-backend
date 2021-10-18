export interface IService {
  title: string;
  description: string;
  legal_person_id: string;
}

export interface IServiceComplete extends IService {
  hire_number: number;
}
