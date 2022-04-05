import React, { useEffect, useRef, useState } from "react";
import styles from "./Canvas.module.css";

class Square {
	constructor(xPosition, yPosition, width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
		this.xPosition = xPosition;
		this.yPosition = yPosition;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.rect(this.xPosition, this.yPosition, this.width, this.height);
		ctx.fill();
	}

	move() {
		this.xPosition = this.xPosition + 1;
	}

	change(mouseX, mouseY) {
		let positionTestX = mouseX;
		if (mouseX === this.xPosition && mouseY === this.yPosition) {
			this.color = "#2ecc71";
		}
	}
}

const Canvas = (props) => {
	const canvasRef = useRef(null);

	let mouseX;
	let mouseY;

	let grid = [];
	let cellSize = 10;

	function generateGrid(ctx, canvasWidth, canvasHeight) {
		for (let i = 0; i < canvasWidth; i += cellSize) {
			for (let j = 0; j < canvasHeight; j += cellSize) {
				grid.push(new Square(i, j, cellSize, cellSize, "blue"));
			}
		}
	}

	function resizeCanvas(canvas) {
		const { width, height } = canvas.getBoundingClientRect();

		if (canvas.width !== width || canvas.height !== height) {
			const { devicePixelRatio: ratio = 1 } = window;
			const context = canvas.getContext("2d");
			canvas.width = width * ratio;
			canvas.height = height * ratio;
			context.scale(ratio, ratio);
			return true;
		}

		return false;
	}

	function draw(ctx) {}

	function testing({ nativeEvent }) {
		const { offsetX, offsetY } = nativeEvent;
		mouseX = offsetX;
		mouseY = offsetY;
	}

	useEffect(() => {
		const canvasObj = canvasRef.current;
		const ctx = canvasObj.getContext("2d");
		let mouseX;
		let mouseY;

		resizeCanvas(canvasObj);

		let gridWidth = ctx.canvas.width;
		let gridHeight = ctx.canvas.height;

		generateGrid(ctx, gridWidth, gridHeight);
		let frameCount = 0;
		let animationFrameId;

		const render = () => {
			if (grid.length > 0) {
				for (let i = 0; i < grid.length; i++) {
					grid[i].draw(ctx);
					grid[i].change(mouseX, mouseY);
				}
			}

			frameCount++;

			//draw(ctx, frameCount);

			animationFrameId = window.requestAnimationFrame(render);
		};

		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [mouseX, mouseY]);
	return (
		<canvas className={styles.canvas} onMouseMove={testing} ref={canvasRef} />
	);
};

export default Canvas;
