import { NavigationActions } from 'react-navigation';

let navigator;

export function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export function state() {
  const { nav } = navigator.state;

  const currentRoute = navigator.state.nav.routes[nav.index];
  const currentState = currentRoute.routes[currentRoute.index];

  return currentState;
}
