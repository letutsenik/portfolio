export const hasOwnProperty = <X extends {}, Y extends PropertyKey>(
	obj: X,
	prop: Y,
): obj is X & Record<Y, unknown> => Object.hasOwn(obj, prop);
