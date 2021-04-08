import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../ui/grid/Grid'


const TablePanel = ({content, thead}) => {
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        {thead.map((value, key) => {
                            return (
                                <th key={key}>{value}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {content.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <h5> {value.name} </h5>
                                </td>
                                <td>
                                    <span>{value.description}</span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

TablePanel.propTypes = {
    content: PropTypes.array.isRequired,
    thead: PropTypes.array.isRequired
}

const GridPanel = ({content}) => {
    return (
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
    )
}

GridPanel.propTypes = {
    content: PropTypes.array.isRequired
}

const ContentPanel = ({title, content, source, thead=[], table=false}) => {
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
                            {table ? 
                                <TablePanel content={content} thead={thead}  /> : 
                                <GridPanel content={content}  />
                            }
                        </Grid>
                        <Grid container item justify="center" xs={12}>
                            <footer>
                                <h2> 
                                    Source: &nbsp;
                                    {
                                        typeof source === "string" ? 
                                            <a href={source}>{source}</a>  : 
                                            source.map(
                                                (value, key) => 
                                                    <a key={key} href={value}> <br  /> {value} </a>
                                            )
                                    }
                                </h2>
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
    source: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired
    ]),
    thead: PropTypes.array,
    table: PropTypes.bool
};

export default ContentPanel;