import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'pagination',
    template:`
        <ul *ngIf="pagination" class="pagination">
            <li [class.disabled]="currentPage==1" (click)="previous()"><a>&laquo;</a></li>
            <li *ngFor="let page of pages" (click)="changePage(page)" [class.active]="currentPage==page">    
                <a>
                    {{page}}
                </a>
            </li>
            <li [class.disabled]="currentPage==pages.length" (click)="next()"><a>&raquo;</a></li>
        </ul>
    `
})

export class PaginationComponent implements OnChanges{
    @Input() items=<any>[];
    @Input() pageSize;
    @Output('page-changed') pageChanged = new EventEmitter();
    pagination=false;
    currentPage=1;
    private pages=[];

    ngOnChanges(){
        if(this.items){
            if(this.items.length>this.pageSize){
                this.pages=[];
                this.pagination=true;
                for(var i=1;i<=Math.ceil(this.items.length/this.pageSize);i++){
                    this.pages.push(i);
                }
            }
            else{
                this.pagination=false;
            }
        }
        
    }
    changePage(page){
        this.currentPage=page;
        this.pageChanged.emit(this.currentPage);
    }
    next(){
        if(this.currentPage==this.pages.length){
            return;
        }
        else{
            this.currentPage++;
            this.pageChanged.emit(this.currentPage);
        }
    }

    previous(){
        if(this.currentPage==1){
            return;
        }
        else{
            this.currentPage--;
            this.pageChanged.emit(this.currentPage);
        }
    }

}