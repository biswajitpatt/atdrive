import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    // console.log(args);
    if (!args) {
      
      return value;
    }

    const searchValue = args.toLowerCase();

    return value.filter((item: any) => {
      const userName = item.name.toLowerCase();
      const userEmail = item.email.toLowerCase();

      return (
        userName.includes(searchValue) ||
        userEmail.includes(searchValue)
      );
    });
  }

}
