import type { AppDispatch, RootState } from '@/store'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

/**
 * 参考文档 https://cn.redux.js.org/tutorials/typescript-quick-start
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
