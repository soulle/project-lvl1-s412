#!/usr/bin/env node
import { description, makePair } from '../games/gcd-module';
import { game } from '../index';

game(description, makePair);
