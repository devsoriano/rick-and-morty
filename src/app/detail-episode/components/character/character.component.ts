import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../../core/models/episode/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() character: ICharacter | undefined;

  constructor() {}

  ngOnInit(): void {}
}
