import { ProcessStep } from '../models/process.model';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    titleKey: 'process.discover.title',
    descriptionKey: 'process.discover.description',
  },
  {
    id: 'plan',
    number: '02',
    titleKey: 'process.plan.title',
    descriptionKey: 'process.plan.description',
  },
  {
    id: 'build',
    number: '03',
    titleKey: 'process.build.title',
    descriptionKey: 'process.build.description',
  },
  {
    id: 'launch',
    number: '04',
    titleKey: 'process.launch.title',
    descriptionKey: 'process.launch.description',
  },
  {
    id: 'improve',
    number: '05',
    titleKey: 'process.improve.title',
    descriptionKey: 'process.improve.description',
  },
];
