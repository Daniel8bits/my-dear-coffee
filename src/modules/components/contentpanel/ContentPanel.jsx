import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../ui/grid/Grid'

const ContentPanel = ({title, content, source}) => {
    return (
        <article>
            <Grid className='CP-content-panel' container justify="center">
                <Grid container item xs={10} spacing={5}>
                        <Grid container item justify="center" xs={12}>
                            <header>
                                <h2> {title} </h2>
                            </header>
                        </Grid>
                        <Grid container item justify="center" xs={12}>
                            <section>
                                {content.map((value, key) => {
                                    return (
                                        <Grid 
                                            key={key}
                                            container 
                                            item 
                                            xs={12} 
                                            zeroMinWidth
                                        >
                                            <h3> {value.name} </h3>
                                            <span>
                                                {value.description}
                                            </span>
                                        </Grid>
                                    )
                                })}
                            </section>
                        </Grid>
                        <Grid container item justify="center" xs={12}>
                            <footer>
                                <h2> Source: <a href={source}>{source}</a> </h2>
                            </footer>
                        </Grid>
                </Grid>
            </Grid>
        </article>
    );
};

ContentPanel.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    source: PropTypes.string.isRequired
};

export default ContentPanel;