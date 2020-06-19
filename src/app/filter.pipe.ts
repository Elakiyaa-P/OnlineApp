import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobs: any[], searchTerm: String): any {
    if(!jobs||!searchTerm){
    return jobs
  }
  return jobs.filter(job=>job.location.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
}
}

