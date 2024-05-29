import React from 'react';

type ProgressButtonTypes = {
    renderPreviousButton: () => JSX.Element;
    renderNextButton: () => JSX.Element;
};

declare function ProgressButtons({ renderPreviousButton, renderNextButton }: ProgressButtonTypes): React.JSX.Element;

export { type ProgressButtonTypes, ProgressButtons };
