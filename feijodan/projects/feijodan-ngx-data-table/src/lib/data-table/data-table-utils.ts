export class DataTableUtils {
  static getValueToDisplay(values: string[]): string {
    return values.toString();
  }
  static isOnlyNumeric(value: string): boolean {
    const regexp = new RegExp('^([0-9]*)$');
    return regexp.test(value);
  }
}
