type OverallStats = {
  currentConfirmedCount: number;
  confirmedCount: number;
  suspectedCount: number;
  curedCount: number;
  deadCount: number;
  seriousCount: number;
  currentConfirmedIncr: number;
  confirmedIncr: number;
  suspectedIncr: number;
  curedIncr: number;
  deadIncr: number;
  seriousIncr: number;
  generalRemark: string;
  abroadRemark: string;
  remark1: string;
  remark2: string;
  remark3: string;
  remark4: string;
  remark5: string;
  note1: string;
  note2: string;
  note3: string;
  updateTime: number;
};

type NCovOverallResponse = {
  results: OverallStats[];
  success: boolean;
};

export { NCovOverallResponse, OverallStats };
