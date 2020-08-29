export class MyString {
  static ucFirst(string) {
    return string.charAt(0) + string.slice(1);
  }

  static reverse(string) {
    return string.split("").reverse().join("");
  }

  static ucWords(string) {
    return string
      .split(" ")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
  }
}

export function myString(){
    return 'string';
}
