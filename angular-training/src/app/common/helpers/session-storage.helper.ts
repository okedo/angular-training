export class SessionStorageService {
  public static set futureStep(step: string) {
    sessionStorage.setItem('step', step)
  }
  public static get futureStep(): string {
    const futureStep = sessionStorage.getItem('step') || "";
    return futureStep;
  }
  public static clear(): void {
    sessionStorage.clear();
  }
}
