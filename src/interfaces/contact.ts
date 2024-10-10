export interface IContact {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  date: undefined | Date;
  time: string;
  content: string;
}

export interface IContactApiResponse {
    status: string;
    message: string;
  }  

export interface IContactInformation {
  address: string;
  phone: string;
  email: string;
  work_hours: string;
}

export interface ISocialMediaAccounts {
  name: string;
  url: string;
}

export interface IWhyChooseUs {
  title: string;
  description: string;
}

export interface IFrequentlyAskedQuestions {
  question: string;
  answer: string;
}
