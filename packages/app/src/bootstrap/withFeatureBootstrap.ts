import { compose } from "ramda";

import { withErrorBoundary } from "@totalrepo/core";

// This is where we can add feature specific HOCs
// Since we moved the globalContext HOC to the feature itself, withErrorBoundary is lonely now.
//  That's ok, it is still a useful abstraction when we need to quicky bootstrap a new concern

export const withFeatureBootstrap = compose(withErrorBoundary);
