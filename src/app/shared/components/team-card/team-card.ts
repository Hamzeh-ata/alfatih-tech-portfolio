import { Component, computed, input } from '@angular/core';
import { TeamMember } from '../../../core/models/team.model';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-team-card',
  imports: [TranslatePipe],
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
})
export class TeamCard {
  readonly member = input.required<TeamMember>();
  readonly mailHref = computed(() => `mailto:${this.member().email}`);
  readonly phoneHref = computed(() => `tel:${this.member().phone.replace(/\s+/g, '')}`);
}
