import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../../core/data/process.data';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-process-steps',
  imports: [TranslatePipe],
  templateUrl: './process-steps.html',
  styleUrl: './process-steps.scss',
})
export class ProcessSteps {
  readonly steps = PROCESS_STEPS;
}
