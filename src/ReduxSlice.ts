import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  value: string | undefined
}

const initialState: DataState = {
  value: undefined,
}

export const ReduxSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateData } = ReduxSlice.actions

export default ReduxSlice.reducer