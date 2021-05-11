export class SessionStorageService {
  public static set futureStep(step: string) {
    sessionStorage.setItem('step', step)
  }
  public static get futureStep(): string {
    const futureStep = sessionStorage.getItem('step') || "";
    return futureStep;
  }
  public static saveToken() {
    sessionStorage.setItem('token', "1");
  }
  public static get authorized(): boolean {
    return !!sessionStorage.getItem('token');
  }

  public static clearToken(){
    sessionStorage.removeItem('token');
  }

  public static clear(): void {
    sessionStorage.clear();
  }
}
