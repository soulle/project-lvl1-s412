#!/usr/bin/env node
import { description, makePair } from '../games/calc-module';
import { game } from '../index';

game(description, makePair);
