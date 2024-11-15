import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_mailchimp_campaigns_add_campaigns_create = createAsyncThunk(
  "addCampaigns/modules_mailchimp_campaigns_add_campaigns_create",
  async payload => {
    const response = await apiService.modules_mailchimp_campaigns_add_campaigns_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const addCampaignsSlice = createSlice({
  name: "addCampaigns",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_mailchimp_campaigns_add_campaigns_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_mailchimp_campaigns_add_campaigns_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_mailchimp_campaigns_add_campaigns_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_mailchimp_campaigns_add_campaigns_create,
  slice: addCampaignsSlice
}
