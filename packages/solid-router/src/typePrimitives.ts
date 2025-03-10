import type { LinkComponentProps } from './link'
import type { UseParamsOptions } from './useParams'
import type { UseSearchOptions } from './useSearch'
import type {
  AnyRouter,
  Constrain,
  ConstrainLiteral,
  FromPathOption,
  NavigateOptions,
  PathParamOptions,
  Redirect,
  RegisteredRouter,
  RouteIds,
  SearchParamOptions,
  ToPathOption,
  UseParamsResult,
  UseSearchResult,
} from '@tanstack/router-core'

export type ValidateFromPath<
  TRouter extends AnyRouter = RegisteredRouter,
  TFrom = string,
> = FromPathOption<TRouter, TFrom>

export type ValidateToPath<
  TRouter extends AnyRouter = RegisteredRouter,
  TTo extends string | undefined = undefined,
  TFrom extends string = string,
> = ToPathOption<TRouter, TFrom, TTo>

export type ValidateSearch<
  TRouter extends AnyRouter = RegisteredRouter,
  TTo extends string | undefined = undefined,
  TFrom extends string = string,
> = SearchParamOptions<TRouter, TFrom, TTo>

export type ValidateParams<
  TRouter extends AnyRouter = RegisteredRouter,
  TTo extends string | undefined = undefined,
  TFrom extends string = string,
> = PathParamOptions<TRouter, TFrom, TTo>

/**
 * @internal
 */
export type InferFrom<
  TOptions,
  TDefaultFrom extends string = string,
> = TOptions extends {
  from: infer TFrom extends string
}
  ? TFrom
  : TDefaultFrom

/**
 * @internal
 */
export type InferTo<TOptions> = TOptions extends {
  to: infer TTo extends string
}
  ? TTo
  : undefined

/**
 * @internal
 */
export type InferMaskTo<TOptions> = TOptions extends {
  mask: { to: infer TTo extends string }
}
  ? TTo
  : ''

export type InferMaskFrom<TOptions> = TOptions extends {
  mask: { from: infer TFrom extends string }
}
  ? TFrom
  : string

export type ValidateNavigateOptions<
  TRouter extends AnyRouter = RegisteredRouter,
  TOptions = unknown,
  TDefaultFrom extends string = string,
> = Constrain<
  TOptions,
  NavigateOptions<
    TRouter,
    InferFrom<TOptions, TDefaultFrom>,
    InferTo<TOptions>,
    InferMaskFrom<TOptions>,
    InferMaskTo<TOptions>
  >
>

export type ValidateNavigateOptionsArray<
  TRouter extends AnyRouter = RegisteredRouter,
  TOptions extends ReadonlyArray<any> = ReadonlyArray<unknown>,
  TDefaultFrom extends string = string,
> = {
  [K in keyof TOptions]: ValidateNavigateOptions<
    TRouter,
    TOptions[K],
    TDefaultFrom
  >
}
export type ValidateRedirectOptions<
  TRouter extends AnyRouter = RegisteredRouter,
  TOptions = unknown,
  TDefaultFrom extends string = string,
> = Constrain<
  TOptions,
  Redirect<
    TRouter,
    InferFrom<TOptions, TDefaultFrom>,
    InferTo<TOptions>,
    InferMaskFrom<TOptions>,
    InferMaskTo<TOptions>
  >
>

export type ValidateRedirectOptionsArray<
  TRouter extends AnyRouter = RegisteredRouter,
  TOptions extends ReadonlyArray<any> = ReadonlyArray<unknown>,
  TDefaultFrom extends string = string,
> = {
  [K in keyof TOptions]: ValidateRedirectOptions<
    TRouter,
    TOptions[K],
    TDefaultFrom
  >
}

export type ValidateLinkOptions<
  TRouter extends AnyRouter = RegisteredRouter,
  TOptions = unknown,
  TDefaultFrom extends string = string,
  TComp = 'a',
> = Constrain<
  TOptions,
  LinkComponentProps<
    TComp,
    TRouter,
    InferFrom<TOptions, TDefaultFrom>,
    InferTo<TOptions>,
    InferMaskFrom<TOptions>,
    InferMaskTo<TOptions>
  >
>

export type ValidateLinkOptionsArray<
  TRouter extends AnyRouter = RegisteredRouter,
  TOptions extends ReadonlyArray<any> = ReadonlyArray<unknown>,
  TDefaultFrom extends string = string,
  TComp = 'a',
> = {
  [K in keyof TOptions]: ValidateLinkOptions<
    TRouter,
    TOptions[K],
    TDefaultFrom,
    TComp
  >
}

export type ValidateId<
  TRouter extends AnyRouter = RegisteredRouter,
  TId extends string = string,
> = ConstrainLiteral<TId, RouteIds<TRouter['routeTree']>>

/**
 * @internal
 */
export type InferStrict<TOptions> = TOptions extends {
  strict: infer TStrict extends boolean
}
  ? TStrict
  : true

/**
 * @internal
 */
export type InferShouldThrow<TOptions> = TOptions extends {
  shouldThrow: infer TShouldThrow extends boolean
}
  ? TShouldThrow
  : true

/**
 * @internal
 */
export type InferSelected<TOptions> = TOptions extends {
  select: (...args: Array<any>) => infer TSelected
}
  ? TSelected
  : unknown

export type ValidateUseSearchOptions<
  TOptions,
  TRouter extends AnyRouter = RegisteredRouter,
> = Constrain<
  TOptions,
  UseSearchOptions<
    TRouter,
    InferFrom<TOptions>,
    InferStrict<TOptions>,
    InferShouldThrow<TOptions>,
    InferSelected<TOptions>
  >
>

export type ValidateUseSearchResult<
  TOptions,
  TRouter extends AnyRouter = RegisteredRouter,
> = UseSearchResult<
  TRouter,
  InferFrom<TOptions>,
  InferStrict<TOptions>,
  InferSelected<TOptions>
>

export type ValidateUseParamsOptions<
  TOptions,
  TRouter extends AnyRouter = RegisteredRouter,
> = Constrain<
  TOptions,
  UseParamsOptions<
    TRouter,
    InferFrom<TOptions>,
    InferStrict<TOptions>,
    InferShouldThrow<TOptions>,
    InferSelected<TOptions>
  >
>

export type ValidateUseParamsResult<
  TOptions,
  TRouter extends AnyRouter = RegisteredRouter,
> = Constrain<
  TOptions,
  UseParamsResult<
    TRouter,
    InferFrom<TOptions>,
    InferStrict<TOptions>,
    InferSelected<TOptions>
  >
>
