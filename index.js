const inputModes = [
  "none",
  "text",
  "decimal",
  "numeric",
  "tel",
  "search",
  "email",
  "url",
].sort();

const inputTypes = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
].sort();

const autocompleteTypes = [
  "shipping",
  "billing",
  "name",
  "honorific-prefix",
  "given-name",
  "additional-name",
  "family-name",
  "honorific-suffix",
  "nickname",
  "username",
  "new-password",
  "current-password",
  "one-time-code",
  "organization-title",
  "organization",
  "street-address",
  "address-line1",
  "address-line2",
  "address-line3",
  "address-level4",
  "address-level3",
  "address-level2",
  "address-level1",
  "country",
  "country-name",
  "postal-code",
  "cc-name",
  "cc-given-name",
  "cc-additional-name",
  "cc-family-name",
  "cc-number",
  "cc-exp",
  "cc-exp-month",
  "cc-exp-year",
  "cc-csc",
  "cc-type",
  "transaction-currency",
  "transaction-amount",
  "language",
  "bday",
  "bday-day",
  "bday-month",
  "bday-year",
  "sex",
  "url",
  "photo",
  "home",
  "work",
  "mobile",
  "fax",
  "pager",
].sort();

const missingExamples = autocompleteTypes.filter(
  (autocomplete) =>
    !document.querySelector(`[autocomplete~="${autocomplete}" i]`)
);

if (missingExamples.length >= 1) {
  console.warn(
    `TODO: The following "autocomplete" types have no example yet:\n${missingExamples.join(
      "\n"
    )}`
  );
}

const missingTypes = inputTypes.filter(
  (type) => !document.querySelector(`input[type="${type}" i]`)
);

if (missingTypes.length >= 1) {
  console.warn(
    `TODO: The following <input> type variants have no example yet:\n${missingTypes.join(
      "\n"
    )}`
  );
}

const missingInputModes = inputModes.filter(
  (mode) => !document.querySelector(`input[inputmode="${mode}" i]`)
);

if (missingInputModes.length >= 1) {
  console.warn(
    `TODO: The following <input> inputMode variants have no example yet:\n${missingInputModes.join(
      "\n"
    )}`
  );
}
