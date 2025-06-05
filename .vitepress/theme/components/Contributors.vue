<script>
import { contributors } from "../../../_data/contributors";

export default {
  props: {
    tagline: String,
    link: String,
    linkText: String,
  },
  setup(props) {
    // Faz uma cópia para não mexer no array original
    const contributorsCopy = [...contributors];

    /**
     * Matriz de Layout:
     * 1 = Avatar de contribuidor
     * 'c' = Círculo decorativo
     * 't' = Tagline
     * 0 = Espaço em branco (para alinhamento)
     */
    const layoutMatrix = [
      [0, 'c', 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 'c'],
      [0, 1, 1, 1, 1, 1, 0],
      ['t', 1, 1, 1, 1], // Linha com o tagline
      [1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 'c', 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
    ];

    const contributorArrangement = layoutMatrix.map(row =>
      row.map(cell => {
        if (cell === 1) {
          // Pega o próximo contribuidor da lista
          return contributorsCopy.shift() || null;
        }
        // Retorna o tipo de célula especial (círculo, tagline ou espaço)
        return { type: cell };
      })
    );

    return {
      contributorArrangement,
      tagline: props.tagline,
      link: props.link,
      linkText: props.linkText,
    };
  },
};
</script>
<template>
  <div>
    <div class="mobile-only not-content">
      <p class="tagline">
        {{ tagline }} <a :href="link">{{ linkText }}</a>
      </p>
    </div>
    <div class="facepile not-content">
      <div v-for="(row, i) in contributorArrangement" :key="i" class="row">
        <template v-for="(cell, index) in row" :key="index">
          <p v-if="cell && cell.type === 't'" class="tagline">
            {{ tagline }} <a :href="link">{{ linkText }}</a>
          </p>
          <span v-else-if="cell && cell.type === 'c'" class="circle" />
          <span v-else-if="cell && cell.type === 0" class="space" />
          <img
            v-else-if="cell && cell.avatar"
            :src="cell.avatar"
            :alt="cell.name || ''"
            width="84"
            height="84"
            loading="eager"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
	.facepile {
		/* Size grid fluidly so on mobile 6 avatars fit in the viewport and size is capped at 56px. */
		--cell-size: min(3.5rem, 13vw);
		--grid-gap: min(1rem, 3vw);

		margin-block: calc(-0.5 * var(--cell-size));
		padding: 0 var(--grid-gap);
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: var(--grid-gap);
		overflow: hidden;
		/* Cap at 6 rows of avatars on mobile. */
		max-height: calc(6 * var(--cell-size) + 5 * var(--grid-gap));
		-webkit-mask-image: linear-gradient(to bottom, transparent, black, transparent);
		mask-image: linear-gradient(to bottom, transparent, black, transparent);
		pointer-events: none;

		background: radial-gradient(closest-side, var(--sl-color-red-low), transparent) no-repeat
			calc(100% + var(--cell-size) * 5) 50% / calc(var(--cell-size) * 8) calc(var(--cell-size) * 15);
	}

	.row {
		display: flex;
		align-items: center;
		gap: var(--grid-gap);
	}

	.row > :not(.tagline) {
		border-radius: 100%;
		width: var(--cell-size);
		height: var(--cell-size);
	}

  /* NOVO: Garante que o espaço em branco ocupe lugar no layout mas não seja visível */
	.space {
		visibility: hidden;
	}

	.circle {
		border: 1px solid var(--sl-color-white);
		opacity: 0.2;
	}

	.tagline {
		color: var(--sl-color-white);
		font-size: var(--sl-text-sm);
		text-wrap: balance;
		pointer-events: all;
	}

	.tagline a {
		color: var(--sl-color-text-accent);
		white-space: nowrap;
	}

	.row > .tagline {
		text-align: right;
		max-width: 15rem;
		padding-inline-end: 0.5rem;
		/* Negative vertical margin prevents the tagline forcing the grid row wider if text wraps onto three lines. */
		margin-block: -1rem;
	}

	.mobile-only {
		padding: 0 1rem;
		text-align: center;
		color: var(--sl-color-white);
	}

	@media (min-width: 78rem) {
		.mobile-only {
			display: none;
		}
		.facepile {
			display: flex;
			padding: var(--grid-gap);
			margin-block: 0;

			max-height: unset;
			-webkit-mask-image: unset;
			mask-image: unset;
			background: none;
		}
	}
</style>
