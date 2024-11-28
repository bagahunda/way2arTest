import {
  computed,
  ComputedRef,
  reactive,
} from 'vue';

export enum EViewState {
  idle = 'idle',
  loading = 'loading',
  done = 'done',
  withError = 'withError',
  notFound = 'notFound',
  forbidden = 'forbidden',
}

type TViewState = EViewState;
type TSetViewState = (value: TViewState) => void;
export type TSetViewStateAs = Record<TViewState, () => void>;
type TUseViewState = {
  isLoading: ComputedRef<boolean>,
  isDone: ComputedRef<boolean>,
  isNotFound: ComputedRef<boolean>,
  isForbidden: ComputedRef<boolean>,
  isIdle: ComputedRef<boolean>,
  withError: ComputedRef<boolean>,
  VIEW_STATE: typeof EViewState,
  setViewStateAs: TSetViewStateAs,
};

const useViewState = (): TUseViewState => {
  const state = reactive<Record<'viewState', TViewState>>({ viewState: EViewState.idle });

  const setViewState: TSetViewState = (nextState) => {
    state.viewState = nextState;
  };

  const setViewStateAs: TSetViewStateAs = {
    loading: () => {
      setViewState(EViewState.loading);
    },
    done: () => {
      setViewState(EViewState.done);
    },
    withError: () => {
      setViewState(EViewState.withError);
    },
    notFound: () => {
      setViewState(EViewState.notFound);
    },
    forbidden: () => {
      setViewState(EViewState.forbidden);
    },
    idle: () => {
      setViewState(EViewState.idle);
    },
  };

  const isLoading = computed(() => state.viewState === EViewState.loading);
  const isDone = computed(() => state.viewState === EViewState.done);
  const withError = computed(() => state.viewState === EViewState.withError);
  const isNotFound = computed(() => state.viewState === EViewState.notFound);
  const isForbidden = computed(() => state.viewState === EViewState.forbidden);
  const isIdle = computed(() => state.viewState === EViewState.idle);

  return {
    isLoading,
    isDone,
    isNotFound,
    isForbidden,
    isIdle,
    withError,
    VIEW_STATE: EViewState,
    setViewStateAs,
  };
};

export default useViewState;
