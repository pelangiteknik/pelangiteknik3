import styles from '@/components/product.module.css'

export default function ProductSpecs({ data }) {

    return (
        <div className={styles.specs}>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Specification</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <td>Phase Specification</td>
                        <td>{data.phase_spec}</td>
                    </tr>
                    <tr>
                        <td>Frequency Specification</td>
                        <td>{data.frequency_spec}</td>
                    </tr>
                    <tr>
                        <td>Genset Power Specification</td>
                        <td>{data.gensetPower_spec}</td>
                    </tr>
                    <tr>
                        <td>Rated Power Specification</td>
                        <td>{data.ratedPower_spec}</td>
                    </tr>
                    <tr>
                        <td>Max Power Specification</td>
                        <td>{data.maxPower_spec}</td>
                    </tr>
                    <tr>
                        <td>Rated AC Voltage Specification</td>
                        <td>{data.ratedACVoltage_spec}</td>
                    </tr>
                    <tr>
                        <td>Starting Method</td>
                        <td>{data.starting_spec}</td>
                    </tr>
                    <tr>
                        <td>Fuel Consumption Specification</td>
                        <td>{data.fuelConsumption_spec}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{data.weight_spec} kg</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>{data.dimension_spec} mm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
