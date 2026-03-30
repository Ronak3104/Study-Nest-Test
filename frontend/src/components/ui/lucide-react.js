// Simple icon functions without JSX
export const Loader2 = (props) => ({
  className: props?.className || 'h-4 w-4',
  innerHTML: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="transparent" stroke-linecap="round" stroke-linejoin="round" pathLength="0.5" pathSpacing="0.5"><animate attributeName="pathLength" from="0" to="1" dur="1s" repeatCount="indefinite"/></circle>'
});

export const CalendarIcon = (props) => ({
  className: props?.className || 'h-4 w-4 mr-2',
  innerHTML: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="3" y2="10"></line>'
});
