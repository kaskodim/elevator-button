import React from 'react';
import {SRefreshButton} from '@src/components/RefreshButton/styles';

export const RefreshButton = () => {
    const handleRefresh = () => {
        window.location.reload();
    }
    return (
        <SRefreshButton onClick={handleRefresh}>
            Вызвать лифтёра
        </SRefreshButton>
    );
};

