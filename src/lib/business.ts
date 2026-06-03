// Single source of truth for business contact details used in legal pages,
// schema, and anywhere else that needs the canonical info.
export const BUSINESS = {
  name: "Warner's Window Cleaning",
  // TODO: confirm exact legal entity name with owner (LLC, Inc., etc.)
  legalName: "Warner's Window Cleaning",
  phone: "(330) 203-1654",
  phoneE164: "+13302031654",
  email: "info@warnerswindowcleaning.com",
  domain: "warnerswindowcleaning.com",
  url: "https://www.warnerswindowcleaning.com",
  foundingYear: 1975,
  address: {
    street: "350 State Street Bldg 2B",
    city: "Wadsworth",
    state: "OH",
    zip: "44281",
  },
} as const;
