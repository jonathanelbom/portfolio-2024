import { factset } from './factset';
import { indeed } from './indeed';
import { mm } from './mentalmodeler';
import { pearson } from './pearson';
import { enspire, jonnybomb, springbox } from './prev';
import { vrbo_all } from './vrbo';

export const projects = [...factset, ...indeed, ...vrbo_all, ...mm, ...pearson, ...springbox, ...enspire, ...jonnybomb];
