/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  NadNameService,
  NadNameService_AttributeSet,
  NadNameService_Transfer
} from "generated";

NadNameService.AttributeSet.handler(async ({ event, context }) => {
  const entity: NadNameService_AttributeSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    node: event.params.node,
    key: event.params.key,
    value: event.params.value,
  };

  context.NadNameService_AttributeSet.set(entity);
});


NadNameService.Transfer.handler(async ({ event, context }) => {
  const entity: NadNameService_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    num: event.params.id
  };

  context.NadNameService_Transfer.set(entity);
});