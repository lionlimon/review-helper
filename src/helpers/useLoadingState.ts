import { ref } from 'vue';

const useLoadingState = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) => {
  const isLoading = ref(false);

  const newFn = (async (...args) => {
    isLoading.value = true;
    const promise = fn(...args);
    await promise;
    isLoading.value = false;

    return promise;
  }) as T;

  return [
    isLoading,
    newFn,
  ] as const;
};

export default useLoadingState;
