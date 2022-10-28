package logger

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

var log *zap.Logger

func init() {

	config := zap.NewProductionConfig()
	encodeConfig := zap.NewProductionEncoderConfig()
	encodeConfig.TimeKey = "timestamp"
	encodeConfig.EncodeTime = zapcore.ISO8601TimeEncoder
	encodeConfig.StacktraceKey = ""
	config.EncoderConfig = encodeConfig

	var err error
	// AddCallerSkip can help you skip caller's call stack depth.
	log, err = config.Build(zap.AddCallerSkip(1))
	if err != nil {
		panic(err)
	}
}

func Info(message string, fields ...zap.Field) {
	log.Info(message, fields...)
}

func Debug(message string, fields ...zap.Field) {
	log.Debug(message, fields...)
}

func Error(message string, fields ...zap.Field) {
	log.Error(message, fields...)
}
