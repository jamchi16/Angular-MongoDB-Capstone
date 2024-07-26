import {Component, OnInit} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  ValidationErrors, AbstractControl, FormControl, AbstractControlOptions
} from '@angular/forms';
import {NgForOf, NgIf} from "@angular/common";
import {ReplaysResultsComponent} from "../replays-results/replays-results.component";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {takeUntil, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'app-replay-search',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReplaysResultsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './replay-search.component.html',
  styleUrl: './replay-search.component.css'
})
export class ReplaySearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: {}[] = [];
  hasMadeSearch = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      userOne: [''],
      userTwo: [''],
      battleFormat: ['']
    }, { validator: this.checkUserEquality } as AbstractControlOptions)
  }

  ngOnInit() {
  }

  checkUserEquality(formGroup: FormGroup): ValidationErrors | null {
    const userOne = formGroup.get('userOne');
    const userTwo = formGroup.get('userTwo');
    if (userOne && userTwo && userOne.value === userTwo.value) {
      userTwo.setErrors({ sameUser: true });
      return { sameUser: true };
    } else {
      userTwo!.setErrors(null);
      return null;
    }
  }

  onSubmit() {
    if (!this.searchForm.valid) {
      return;
    }

    const userOne = this.searchForm.value.userOne || '';
    const userTwo = this.searchForm.value.userTwo || '';
    const battleFormat = this.searchForm.value.battleFormat || '';

    this.http.get<any[]>(`https://replay.pokemonshowdown.com/search.json?user=${userOne}&user2=${userTwo}&format=${battleFormat}`)
      .subscribe(
        searchData => {
          this.searchResults = searchData.slice(0, 10);
          this.hasMadeSearch = true;
        }
      );

    this.searchForm.reset()
  }

}
