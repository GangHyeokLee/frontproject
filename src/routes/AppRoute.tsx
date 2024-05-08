import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./route.constant"
import { Suspense } from "react";
import { AggregateComponent } from "./withAggregate";
import Layout from "component/layout/Layout";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.entries(ROUTES).map(([key, { path, route }]) => {
          const LazyComponent = React.lazy(
            () => import(`@/pages/${route}.tsx`)
          );
          return (
            <Route
              key={key}
              path={path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AggregateComponent children={<LazyComponent />} page={route} />
                </Suspense>
              }
            />
          )
        })}
      </Route>
    </Routes>
  )
}