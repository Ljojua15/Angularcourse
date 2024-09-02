import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { directives } from "./interface";
@Component({
  selector: "app-angular-directives",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./angular-directives.component.html",
  styleUrl: "./angular-directives.component.scss",
})
export class AngularDirectivesComponent {
  directive = signal<directives[]>([
    { id: 1, name: "ngif", usefull: true, color: "red" },
    { id: 2, name: "ngFor", usefull: true, color: "black" },
    { id: 3, name: "ngSwich", usefull: false, color: "yellow" },
    { id: 4, name: "ngClass", usefull: true, color: "green" },
    { id: 5, name: "ngSlyle", usefull: true, color: "pink" },
    { id: 6, name: "ng-templete", usefull: true, color: "orange" },
    { id: 7, name: "ng-container", usefull: true, color: "brown" },
  ]);
}
