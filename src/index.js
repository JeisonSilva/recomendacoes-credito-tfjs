const tf = require('@tensorflow/tfjs');

async function main() {
  const features = tf.tensor2d([
    [1000, 1],
    [2000, 2],
    [3000, 3],
    [4000, 4]
  ]);

  const labels = tf.tensor2d([[0], [0], [1], [1]]);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, activation: 'relu', inputShape: [2] }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({
    optimizer: tf.train.adam(0.01),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });

  await model.fit(features, labels, { epochs: 50, verbose: 0 });

  const novoCliente = tf.tensor2d([[2500, 2]]);
  const pred = model.predict(novoCliente);
  const prob = (await pred.data())[0];

  console.log(`Probabilidade de aprovacao de credito: ${(prob * 100).toFixed(2)}%`);
}

main().catch((err) => {
  console.error('Erro ao executar exemplo:', err);
  process.exit(1);
});
