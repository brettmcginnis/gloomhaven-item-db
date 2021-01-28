import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { storeEnableStoreStockManagement, storeAll } from '../../../State/RealState';
import { getRealSpoilerFilter } from '../../../State/Selectors';
import { useGame } from '../../Game/GameProvider';

const SpoilerFilters = () => {
    const dispatch = useDispatch();
    const { spoilerFilter } = useGame();

    const { enableStoreStockManagement, all } = getRealSpoilerFilter();

    return (
        <Form>
            <Form.Group inline>
                <label>Respecting Spoiler Settings:</label>
                <Button
                    color={all ? 'red' : 'blue'}
                    onClick={() => dispatch(storeAll(!all))}
                >
                    {all
                        ? <React.Fragment><Icon name={'eye'}/> disabled</React.Fragment>
                        : <React.Fragment><Icon name={'eye slash'}/> enabled</React.Fragment>
                    }
                </Button>
            </Form.Group>

            <Form.Group inline>
                <label>Enable Store Stock Management:</label>
                <Form.Checkbox
                    toggle
                    checked={enableStoreStockManagement}
                    onClick={() => {
                        dispatch(storeEnableStoreStockManagement(!enableStoreStockManagement));
                    }}/>
            </Form.Group>

           {spoilerFilter}
      
        </Form>
    );
}

export default SpoilerFilters;
