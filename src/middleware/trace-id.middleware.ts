import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { traceContext } from '../common/trace-context';

@Injectable()
export class TraceIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const traceId = uuidv4();
    traceContext.run(traceId, () => {
      req['trace_id'] = traceId;
      next();
    });
  }
}