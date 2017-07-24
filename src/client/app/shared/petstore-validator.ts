
export function NameValidator(control:any) {
  if (!control.value.match(/^[A-Z]/)) {
    return {'invalidName': true};
  } else {
    return null;
  }
}
