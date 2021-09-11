import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "safe",
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string): SafeHtml {
    // return this.sanitizer.bypassSecurityTrustHtml(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);


  }
}
