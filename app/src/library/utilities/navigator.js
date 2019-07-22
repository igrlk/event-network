import { NavigationActions, StackActions } from 'react-navigation';

let _container = null;

export function setNavigatorContainer(container) {
  _container = container.props.transitionProps.navigation;
}

export function resetNavigation(routeName, params) {
  _container.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params,
        }),
      ],
    }),
  );
}

export function navigate(routeName, params) {
  _container.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params,
    }),
  );
}

export function navigateDeep(actions) {
  _container.dispatch(
    actions.reduceRight(
      (prevAction, action) =>
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName: action.routeName,
          params: action.params,
          action: prevAction,
        }),
      undefined,
    ),
  );
}

export function getCurrentRoute() {
  if (!_container || !_container.state.nav) {
    return null;
  }

  return _container.state.nav.routes[_container.state.nav.index] || null;
}
