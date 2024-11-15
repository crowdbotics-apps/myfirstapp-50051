import axios from "axios"
const myfirstappAPI = axios.create({
  baseURL: "https://myfirstapp-50051.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return myfirstappAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return myfirstappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return myfirstappAPI.post(`/api/v1/signup/`, payload)
}
function modules_mailchimp_audience_add_list_member_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/add-list-member/`,
    payload
  )
}
function modules_mailchimp_audience_add_or_remove_member_tag_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/add-or-remove-member-tag/${payload.subscriber_hash}/`,
    payload
  )
}
function modules_mailchimp_audience_add_segment_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/add-segment/`,
    payload
  )
}
function modules_mailchimp_audience_batch_subscribe_unsubscribe_audience_create(
  payload
) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/batch-subscribe-unsubscribe-audience/`,
    payload
  )
}
function modules_mailchimp_audience_delete_audience_list_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/audience/${payload.id}/delete-audience-list/`
  )
}
function modules_mailchimp_audience_delete_list_member_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/audience/${payload.id}/delete-list-member/${payload.subscriber_hash}/`
  )
}
function modules_mailchimp_audience_delete_segment_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/audience/${payload.id}/delete-segment/${payload.segment_id}/`
  )
}
function modules_mailchimp_audience_get_audience_list_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/audience/${payload.id}/get-audience-list/`
  )
}
function modules_mailchimp_audience_get_member_info_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/audience/${payload.id}/get-member-info/${payload.subscriber_hash}/`
  )
}
function modules_mailchimp_audience_get_segment_info_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/audience/${payload.id}/get-segment-info/${payload.segment_id}/`
  )
}
function modules_mailchimp_audience_list_member_info_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/audience/${payload.id}/list-member-info/`
  )
}
function modules_mailchimp_audience_list_member_tags_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/audience/${payload.id}/list-member-tags/${payload.subscriber_hash}/`
  )
}
function modules_mailchimp_audience_list_segment_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/audience/${payload.id}/list-segment/`
  )
}
function modules_mailchimp_audience_update_audience_list_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/update-audience-list/`,
    payload
  )
}
function modules_mailchimp_audience_update_list_member_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/update-list-member/${payload.subscriber_hash}/`,
    payload
  )
}
function modules_mailchimp_audience_update_segment_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/${payload.id}/update-segment/${payload.segment_id}/`,
    payload
  )
}
function modules_mailchimp_audience_add_audience_list_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/audience/add-audience-list/`,
    payload
  )
}
function modules_mailchimp_audience_get_audience_lists_retrieve(payload) {
  return myfirstappAPI.get(`/modules/mailchimp/audience/get-audience-lists/`)
}
function modules_mailchimp_campaign_reports_get_campaign_abuse_report_retrieve(
  payload
) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-abuse-report/${payload.report_id}/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_abuse_reports_retrieve(
  payload
) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-abuse-reports/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_click_details_retrieve(
  payload
) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-click-details/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_open_details_retrieve(
  payload
) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-open-details/`
  )
}
function modules_mailchimp_campaign_reports_get_campaign_report_retrieve(
  payload
) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaign-reports/${payload.id}/get-campaign-report/`
  )
}
function modules_mailchimp_campaign_reports_list_campaign_report_retrieve(
  payload
) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaign-reports/list-campaign-report/`
  )
}
function modules_mailchimp_campaigns_cancel_campaign_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/cancel-campaign/`
  )
}
function modules_mailchimp_campaigns_delete_campaign_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/campaigns/${payload.id}/delete-campaign/`
  )
}
function modules_mailchimp_campaigns_delete_campaign_folder_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/campaigns/${payload.id}/delete_campaign_folder/`
  )
}
function modules_mailchimp_campaigns_get_campaign_folder_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaigns/${payload.id}/get-campaign-folder/`
  )
}
function modules_mailchimp_campaigns_get_campaign_info_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/campaigns/${payload.id}/get-campaign-info/`
  )
}
function modules_mailchimp_campaigns_schedule_campaign_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/schedule-campaign/`,
    payload
  )
}
function modules_mailchimp_campaigns_send_campaign_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/send-campaign/`
  )
}
function modules_mailchimp_campaigns_unschedule_campaign_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/unschedule-campaign/`
  )
}
function modules_mailchimp_campaigns_update_campaign_folder_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/update-campaign-folder/`,
    payload
  )
}
function modules_mailchimp_campaigns_update_campaign_settings_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/${payload.id}/update-campaign-settings/`,
    payload
  )
}
function modules_mailchimp_campaigns_add_campaign_folder_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/add-campaign-folder/`,
    payload
  )
}
function modules_mailchimp_campaigns_add_campaigns_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/campaigns/add-campaigns/`,
    payload
  )
}
function modules_mailchimp_campaigns_list_campaign_folder_retrieve(payload) {
  return myfirstappAPI.get(`/modules/mailchimp/campaigns/list-campaign-folder/`)
}
function modules_mailchimp_campaigns_list_campaigns_retrieve(payload) {
  return myfirstappAPI.get(`/modules/mailchimp/campaigns/list-campaigns/`)
}
function modules_mailchimp_templates_delete_template_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/templates/${payload.id}/delete-template/`
  )
}
function modules_mailchimp_templates_delete_template_folder_destroy(payload) {
  return myfirstappAPI.delete(
    `/modules/mailchimp/templates/${payload.id}/delete-template-folder/`
  )
}
function modules_mailchimp_templates_get_template_folder_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/templates/${payload.id}/get-template-folder/`
  )
}
function modules_mailchimp_templates_get_template_info_retrieve(payload) {
  return myfirstappAPI.get(
    `/modules/mailchimp/templates/${payload.id}/get-template-info/`
  )
}
function modules_mailchimp_templates_update_template_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/templates/${payload.id}/update-template/`,
    payload
  )
}
function modules_mailchimp_templates_update_template_folder_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/templates/${payload.id}/update-template-folder/`,
    payload
  )
}
function modules_mailchimp_templates_add_template_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/templates/add-template/`,
    payload
  )
}
function modules_mailchimp_templates_add_template_folder_create(payload) {
  return myfirstappAPI.post(
    `/modules/mailchimp/templates/add-template-folder/`,
    payload
  )
}
function modules_mailchimp_templates_list_template_retrieve(payload) {
  return myfirstappAPI.get(`/modules/mailchimp/templates/list-template/`)
}
function modules_mailchimp_templates_list_template_folder_retrieve(payload) {
  return myfirstappAPI.get(`/modules/mailchimp/templates/list-template-folder/`)
}
function rest_auth_login_create(payload) {
  return myfirstappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return myfirstappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return myfirstappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return myfirstappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return myfirstappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return myfirstappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return myfirstappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return myfirstappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return myfirstappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return myfirstappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return myfirstappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_mailchimp_audience_add_list_member_create,
  modules_mailchimp_audience_add_or_remove_member_tag_create,
  modules_mailchimp_audience_add_segment_create,
  modules_mailchimp_audience_batch_subscribe_unsubscribe_audience_create,
  modules_mailchimp_audience_delete_audience_list_destroy,
  modules_mailchimp_audience_delete_list_member_destroy,
  modules_mailchimp_audience_delete_segment_destroy,
  modules_mailchimp_audience_get_audience_list_retrieve,
  modules_mailchimp_audience_get_member_info_retrieve,
  modules_mailchimp_audience_get_segment_info_retrieve,
  modules_mailchimp_audience_list_member_info_retrieve,
  modules_mailchimp_audience_list_member_tags_retrieve,
  modules_mailchimp_audience_list_segment_retrieve,
  modules_mailchimp_audience_update_audience_list_create,
  modules_mailchimp_audience_update_list_member_create,
  modules_mailchimp_audience_update_segment_create,
  modules_mailchimp_audience_add_audience_list_create,
  modules_mailchimp_audience_get_audience_lists_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_abuse_report_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_abuse_reports_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_click_details_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_open_details_retrieve,
  modules_mailchimp_campaign_reports_get_campaign_report_retrieve,
  modules_mailchimp_campaign_reports_list_campaign_report_retrieve,
  modules_mailchimp_campaigns_cancel_campaign_create,
  modules_mailchimp_campaigns_delete_campaign_destroy,
  modules_mailchimp_campaigns_delete_campaign_folder_destroy,
  modules_mailchimp_campaigns_get_campaign_folder_retrieve,
  modules_mailchimp_campaigns_get_campaign_info_retrieve,
  modules_mailchimp_campaigns_schedule_campaign_create,
  modules_mailchimp_campaigns_send_campaign_create,
  modules_mailchimp_campaigns_unschedule_campaign_create,
  modules_mailchimp_campaigns_update_campaign_folder_create,
  modules_mailchimp_campaigns_update_campaign_settings_create,
  modules_mailchimp_campaigns_add_campaign_folder_create,
  modules_mailchimp_campaigns_add_campaigns_create,
  modules_mailchimp_campaigns_list_campaign_folder_retrieve,
  modules_mailchimp_campaigns_list_campaigns_retrieve,
  modules_mailchimp_templates_delete_template_destroy,
  modules_mailchimp_templates_delete_template_folder_destroy,
  modules_mailchimp_templates_get_template_folder_retrieve,
  modules_mailchimp_templates_get_template_info_retrieve,
  modules_mailchimp_templates_update_template_create,
  modules_mailchimp_templates_update_template_folder_create,
  modules_mailchimp_templates_add_template_create,
  modules_mailchimp_templates_add_template_folder_create,
  modules_mailchimp_templates_list_template_retrieve,
  modules_mailchimp_templates_list_template_folder_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
