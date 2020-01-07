import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';

const MISSING_ERROR = 'Error was swallowed during propagation.';

const HighSafeArea = <BaseProps extends {}>(
  BaseComponent: React.ComponentType<BaseProps>,
) => {
  type HocProps = {
    // here you can extend hoc with new props
  };
  type HocState = {
    readonly error: Error | null | undefined;
  };

  return class Hoc extends React.Component<HocProps, HocState> {
    static displayName = `withErrorBoundary(${BaseComponent.name})`;
    static readonly WrappedComponent = BaseComponent;

    readonly state: HocState = {
      error: undefined,
    };

    componentDidCatch(error: Error | null, info: object) {
      this.setState({error: error || new Error(MISSING_ERROR)});
      this.logErrorToCloud(error, info);
    }

    logErrorToCloud = (error: Error | null, info: object) => {};

    render() {
      const {children, ...restProps} = this.props;
      const {error} = this.state;

      if (error) {
        return <BaseComponent {...restProps as BaseProps} />;
      }

      return children;
    }
  };
};

const ErrorComponent = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Opps, something wrong. Please try again later..</Text>
    </View>
  );
};

const Wrap = HighSafeArea(ErrorComponent);

export default Wrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});